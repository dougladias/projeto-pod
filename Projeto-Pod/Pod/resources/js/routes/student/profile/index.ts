import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Student\ProfileController::index
 * @see app/Http/Controllers/Student/ProfileController.php:32
 * @route '/app/profile'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/app/profile',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ProfileController::index
 * @see app/Http/Controllers/Student/ProfileController.php:32
 * @route '/app/profile'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ProfileController::index
 * @see app/Http/Controllers/Student/ProfileController.php:32
 * @route '/app/profile'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ProfileController::index
 * @see app/Http/Controllers/Student/ProfileController.php:32
 * @route '/app/profile'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ProfileController::index
 * @see app/Http/Controllers/Student/ProfileController.php:32
 * @route '/app/profile'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ProfileController::index
 * @see app/Http/Controllers/Student/ProfileController.php:32
 * @route '/app/profile'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ProfileController::index
 * @see app/Http/Controllers/Student/ProfileController.php:32
 * @route '/app/profile'
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
* @see \App\Http\Controllers\Student\ProfileController::progress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
export const progress = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: progress.url(options),
    method: 'get',
})

progress.definition = {
    methods: ["get","head"],
    url: '/app/profile/progress',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ProfileController::progress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
progress.url = (options?: RouteQueryOptions) => {
    return progress.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ProfileController::progress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
progress.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: progress.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ProfileController::progress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
progress.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: progress.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ProfileController::progress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
    const progressForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: progress.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ProfileController::progress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
        progressForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: progress.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ProfileController::progress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
        progressForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: progress.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    progress.form = progressForm
/**
* @see \App\Http\Controllers\Student\ProfileController::achievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
export const achievements = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: achievements.url(options),
    method: 'get',
})

achievements.definition = {
    methods: ["get","head"],
    url: '/app/profile/achievements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ProfileController::achievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
achievements.url = (options?: RouteQueryOptions) => {
    return achievements.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ProfileController::achievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
achievements.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: achievements.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ProfileController::achievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
achievements.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: achievements.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ProfileController::achievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
    const achievementsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: achievements.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ProfileController::achievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
        achievementsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: achievements.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ProfileController::achievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
        achievementsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: achievements.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    achievements.form = achievementsForm
/**
* @see \App\Http\Controllers\Student\ProfileController::recommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
export const recommendations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recommendations.url(options),
    method: 'get',
})

recommendations.definition = {
    methods: ["get","head"],
    url: '/app/profile/recommendations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ProfileController::recommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
recommendations.url = (options?: RouteQueryOptions) => {
    return recommendations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ProfileController::recommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
recommendations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: recommendations.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ProfileController::recommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
recommendations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: recommendations.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ProfileController::recommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
    const recommendationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: recommendations.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ProfileController::recommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
        recommendationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recommendations.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ProfileController::recommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
        recommendationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: recommendations.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    recommendations.form = recommendationsForm
const profile = {
    index: Object.assign(index, index),
progress: Object.assign(progress, progress),
achievements: Object.assign(achievements, achievements),
recommendations: Object.assign(recommendations, recommendations),
}

export default profile