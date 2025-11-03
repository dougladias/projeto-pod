import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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
* @see \App\Http\Controllers\Student\RankingController::getRanking
 * @see app/Http/Controllers/Student/RankingController.php:65
 * @route '/app/ranking/data'
 */
export const getRanking = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRanking.url(options),
    method: 'get',
})

getRanking.definition = {
    methods: ["get","head"],
    url: '/app/ranking/data',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\RankingController::getRanking
 * @see app/Http/Controllers/Student/RankingController.php:65
 * @route '/app/ranking/data'
 */
getRanking.url = (options?: RouteQueryOptions) => {
    return getRanking.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\RankingController::getRanking
 * @see app/Http/Controllers/Student/RankingController.php:65
 * @route '/app/ranking/data'
 */
getRanking.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRanking.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\RankingController::getRanking
 * @see app/Http/Controllers/Student/RankingController.php:65
 * @route '/app/ranking/data'
 */
getRanking.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getRanking.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\RankingController::getRanking
 * @see app/Http/Controllers/Student/RankingController.php:65
 * @route '/app/ranking/data'
 */
    const getRankingForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getRanking.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\RankingController::getRanking
 * @see app/Http/Controllers/Student/RankingController.php:65
 * @route '/app/ranking/data'
 */
        getRankingForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRanking.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\RankingController::getRanking
 * @see app/Http/Controllers/Student/RankingController.php:65
 * @route '/app/ranking/data'
 */
        getRankingForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRanking.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getRanking.form = getRankingForm
const RankingController = { index, getRanking }

export default RankingController