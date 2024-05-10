import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'
import { fetchNextArticlesPage } from './fetchNextArticlesPage'
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList'

jest.mock('../fetchArticlesList/fetchArticlesList')

describe('fetchProfileData', () => {
  it('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        hasMore: true,
        isLoading: false,
      },
    })

    await thunk.callThunk(undefined)

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toBeCalledWith({ page: 3 })
  })

  it('fetchArticleList not called', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        page: 2,
        limit: 5,
        hasMore: false,
        isLoading: false,
      },
    })

    await thunk.callThunk(undefined)

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
