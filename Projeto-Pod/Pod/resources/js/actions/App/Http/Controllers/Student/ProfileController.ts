import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
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
* @see \App\Http\Controllers\Student\ProfileController::getProgress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
export const getProgress = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProgress.url(options),
    method: 'get',
})

getProgress.definition = {
    methods: ["get","head"],
    url: '/app/profile/progress',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ProfileController::getProgress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
getProgress.url = (options?: RouteQueryOptions) => {
    return getProgress.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ProfileController::getProgress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
getProgress.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getProgress.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ProfileController::getProgress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
getProgress.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getProgress.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ProfileController::getProgress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
    const getProgressForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getProgress.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ProfileController::getProgress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
        getProgressForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getProgress.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ProfileController::getProgress
 * @see app/Http/Controllers/Student/ProfileController.php:83
 * @route '/app/profile/progress'
 */
        getProgressForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getProgress.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getProgress.form = getProgressForm
/**
* @see \App\Http\Controllers\Student\ProfileController::getAchievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
export const getAchievements = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAchievements.url(options),
    method: 'get',
})

getAchievements.definition = {
    methods: ["get","head"],
    url: '/app/profile/achievements',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ProfileController::getAchievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
getAchievements.url = (options?: RouteQueryOptions) => {
    return getAchievements.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ProfileController::getAchievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
getAchievements.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAchievements.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ProfileController::getAchievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
getAchievements.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAchievements.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ProfileController::getAchievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
    const getAchievementsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getAchievements.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ProfileController::getAchievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
        getAchievementsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAchievements.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ProfileController::getAchievements
 * @see app/Http/Controllers/Student/ProfileController.php:94
 * @route '/app/profile/achievements'
 */
        getAchievementsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAchievements.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getAchievements.form = getAchievementsForm
/**
* @see \App\Http\Controllers\Student\ProfileController::getRecommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
export const getRecommendations = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRecommendations.url(options),
    method: 'get',
})

getRecommendations.definition = {
    methods: ["get","head"],
    url: '/app/profile/recommendations',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Student\ProfileController::getRecommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
getRecommendations.url = (options?: RouteQueryOptions) => {
    return getRecommendations.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Student\ProfileController::getRecommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
getRecommendations.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRecommendations.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Student\ProfileController::getRecommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
getRecommendations.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getRecommendations.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Student\ProfileController::getRecommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
    const getRecommendationsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getRecommendations.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Student\ProfileController::getRecommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
        getRecommendationsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRecommendations.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Student\ProfileController::getRecommendations
 * @see app/Http/Controllers/Student/ProfileController.php:109
 * @route '/app/profile/recommendations'
 */
        getRecommendationsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRecommendations.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getRecommendations.form = getRecommendationsForm
const ProfileController = { index, getProgress, getAchievements, getRecommendations }

export default ProfileController