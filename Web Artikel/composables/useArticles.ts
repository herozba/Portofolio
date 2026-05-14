// composables/useArticles.ts
export interface Article {
  id: number
  title: string
  body: string
  author: string
  date: string
  category?: string
  imageUrl?: string
  readTime?: number
  description?: string
  url?: string
  sourceName?: string
}

const CATEGORIES = ['Teknologi', 'Sains', 'Politik', 'Bisnis', 'Olahraga', 'Kesehatan', 'Budaya', 'Dunia']

function assignMeta(articles: any[]): Article[] {
  return articles.map((a, i) => ({
    id:          i,
    title:       a.title       || 'Tanpa Judul',
    body:        a.content     || a.body || '',
    author:      a.author      || a.source?.name || 'Anonim',
    date:        a.publishedAt || a.date || '',
    imageUrl:    a.urlToImage  || a.imageUrl || '',
    description: a.description || '',
    url:         a.url         || '',
    sourceName:  a.source?.name || '',
    category:    CATEGORIES[i % CATEGORIES.length],
    readTime:    Math.floor((a.content || a.body || '').split(' ').length / 200) + 2,
  }))
}

export function useArticles() {
  const articles     = useState<Article[]>('articles', () => [])
  const loading      = useState<boolean>('loading', () => false)
  const error        = useState<string | null>('error', () => null)

  const search       = ref('')
  const authorFilter = ref('')
  const sortOrder    = ref<'newest' | 'oldest'>('newest')
  const viewMode     = ref<'card' | 'list'>('card')

  async function fetchArticles() {
    if (articles.value.length > 0) return
    loading.value = true
    error.value   = null
    try {
      const data = await $fetch<any>('https://api.npoint.io/749e4cc46af7d03db38a')
      const list = Array.isArray(data)
        ? data
        : Array.isArray(data.articles)
          ? data.articles
          : [data]
      articles.value = assignMeta(list)
    } catch (e: any) {
      error.value = e?.message ?? 'Gagal memuat artikel'
    } finally {
      loading.value = false
    }
  }

  const authors = computed(() =>
    [...new Set(articles.value.map(a => a.author))].filter(Boolean).sort()
  )

  const filtered = computed(() => {
    let list = [...articles.value]

    const q = search.value.toLowerCase().trim()
    if (q) {
      list = list.filter(a =>
        (a.title       ?? '').toLowerCase().includes(q) ||
        (a.body        ?? '').toLowerCase().includes(q) ||
        (a.author      ?? '').toLowerCase().includes(q) ||
        (a.category    ?? '').toLowerCase().includes(q) ||
        (a.description ?? '').toLowerCase().includes(q)
      )
    }

    if (authorFilter.value) {
      list = list.filter(a => a.author === authorFilter.value)
    }

    list.sort((a, b) => {
      const da = new Date(a.date || 0).getTime()
      const db = new Date(b.date || 0).getTime()
      return sortOrder.value === 'newest' ? db - da : da - db
    })

    return list
  })

  return {
    articles, loading, error,
    search, authorFilter, sortOrder, viewMode,
    authors, filtered,
    fetchArticles,
  }
}
