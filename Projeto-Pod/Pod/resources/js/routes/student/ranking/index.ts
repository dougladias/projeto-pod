import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\RankingController::index
 * @see app/Http/Controllers/Student/RankingController.php:23
 * @route '/app/ranking'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/ranking',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\RankingController::index
 * @see app/Http/Controllers/Student/RankingController.php:23
 * @route '/app/ranking'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\RankingController::index
 * @see app/Http/Controllers/Student/RankingController.php:23
 * @route '/app/ranking'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\RankingController::index
 * @see app/Http/Controllers/Student/RankingController.php:23
 * @route '/app/ranking'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\RankingController::index
 * @see app/Http/Controllers/Student/RankingController.php:23
 * @route '/app/ranking'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\RankingController::index
 * @see app/Http/Controllers/Student/RankingController.php:23
 * @route '/app/ranking'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\RankingController::index
 * @see app/Http/Controllers/Student/RankingController.php:23
 * @route '/app/ranking'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\Student\RankingController::data
 * @see app/Http/Controllers/Student/RankingController.php:73
 * @route '/app/ranking/data'
 */
export const data = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: data.url(options),
    method: 'get',
})

data.definition = {
    methods: ["get","head"],
    url: '/app/ranking/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\RankingController::data
 * @see app/Http/Controllers/Student/RankingController.php:73
 * @route '/app/ranking/data'
 */
data.url = (options?: RouteQueryOptions) => {
    return data.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\RankingController::data
 * @see app/Http/Controllers/Student/RankingController.php:73
 * @route '/app/ranking/data'
 */
data.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: data.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\RankingController::data
 * @see app/Http/Controllers/Student/RankingController.php:73
 * @route '/app/ranking/data'
 */
data.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: data.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\RankingController::data
 * @see app/Http/Controllers/Student/RankingController.php:73
 * @route '/app/ranking/data'
 */
    const dataForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: data.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\RankingController::data
 * @see app/Http/Controllers/Student/RankingController.php:73
 * @route '/app/ranking/data'
 */
        dataForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: data.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\RankingController::data
 * @see app/Http/Controllers/Student/RankingController.php:73
 * @route '/app/ranking/data'
 */
        dataForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: data.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    data.form = dataForm
const ranking = {
    index: Object.assign(index, index),
data: Object.assign(data, data),
}

export default ranking