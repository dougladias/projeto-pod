import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\QuizController::index
 * @see app/Http/Controllers/Admin/QuizController.php:26
 * @route '/backoffice/quizzes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backoffice/quizzes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\QuizController::index
 * @see app/Http/Controllers/Admin/QuizController.php:26
 * @route '/backoffice/quizzes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QuizController::index
 * @see app/Http/Controllers/Admin/QuizController.php:26
 * @route '/backoffice/quizzes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\QuizController::index
 * @see app/Http/Controllers/Admin/QuizController.php:26
 * @route '/backoffice/quizzes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\QuizController::index
 * @see app/Http/Controllers/Admin/QuizController.php:26
 * @route '/backoffice/quizzes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\QuizController::index
 * @see app/Http/Controllers/Admin/QuizController.php:26
 * @route '/backoffice/quizzes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\QuizController::index
 * @see app/Http/Controllers/Admin/QuizController.php:26
 * @route '/backoffice/quizzes'
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
* @see \App\Http\Controllers\Admin\QuizController::create
 * @see app/Http/Controllers/Admin/QuizController.php:87
 * @route '/backoffice/quizzes/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backoffice/quizzes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\QuizController::create
 * @see app/Http/Controllers/Admin/QuizController.php:87
 * @route '/backoffice/quizzes/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QuizController::create
 * @see app/Http/Controllers/Admin/QuizController.php:87
 * @route '/backoffice/quizzes/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\QuizController::create
 * @see app/Http/Controllers/Admin/QuizController.php:87
 * @route '/backoffice/quizzes/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\QuizController::create
 * @see app/Http/Controllers/Admin/QuizController.php:87
 * @route '/backoffice/quizzes/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\QuizController::create
 * @see app/Http/Controllers/Admin/QuizController.php:87
 * @route '/backoffice/quizzes/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\QuizController::create
 * @see app/Http/Controllers/Admin/QuizController.php:87
 * @route '/backoffice/quizzes/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Admin\QuizController::store
 * @see app/Http/Controllers/Admin/QuizController.php:108
 * @route '/backoffice/quizzes'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backoffice/quizzes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\QuizController::store
 * @see app/Http/Controllers/Admin/QuizController.php:108
 * @route '/backoffice/quizzes'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QuizController::store
 * @see app/Http/Controllers/Admin/QuizController.php:108
 * @route '/backoffice/quizzes'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\QuizController::store
 * @see app/Http/Controllers/Admin/QuizController.php:108
 * @route '/backoffice/quizzes'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\QuizController::store
 * @see app/Http/Controllers/Admin/QuizController.php:108
 * @route '/backoffice/quizzes'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\QuizController::show
 * @see app/Http/Controllers/Admin/QuizController.php:154
 * @route '/backoffice/quizzes/{quiz}'
 */
export const show = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/backoffice/quizzes/{quiz}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\QuizController::show
 * @see app/Http/Controllers/Admin/QuizController.php:154
 * @route '/backoffice/quizzes/{quiz}'
 */
show.url = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quiz: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { quiz: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    quiz: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        quiz: typeof args.quiz === 'object'
                ? args.quiz.id
                : args.quiz,
                }

    return show.definition.url
            .replace('{quiz}', parsedArgs.quiz.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QuizController::show
 * @see app/Http/Controllers/Admin/QuizController.php:154
 * @route '/backoffice/quizzes/{quiz}'
 */
show.get = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\QuizController::show
 * @see app/Http/Controllers/Admin/QuizController.php:154
 * @route '/backoffice/quizzes/{quiz}'
 */
show.head = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\QuizController::show
 * @see app/Http/Controllers/Admin/QuizController.php:154
 * @route '/backoffice/quizzes/{quiz}'
 */
    const showForm = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\QuizController::show
 * @see app/Http/Controllers/Admin/QuizController.php:154
 * @route '/backoffice/quizzes/{quiz}'
 */
        showForm.get = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\QuizController::show
 * @see app/Http/Controllers/Admin/QuizController.php:154
 * @route '/backoffice/quizzes/{quiz}'
 */
        showForm.head = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Admin\QuizController::edit
 * @see app/Http/Controllers/Admin/QuizController.php:199
 * @route '/backoffice/quizzes/{quiz}/edit'
 */
export const edit = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backoffice/quizzes/{quiz}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\QuizController::edit
 * @see app/Http/Controllers/Admin/QuizController.php:199
 * @route '/backoffice/quizzes/{quiz}/edit'
 */
edit.url = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quiz: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { quiz: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    quiz: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        quiz: typeof args.quiz === 'object'
                ? args.quiz.id
                : args.quiz,
                }

    return edit.definition.url
            .replace('{quiz}', parsedArgs.quiz.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QuizController::edit
 * @see app/Http/Controllers/Admin/QuizController.php:199
 * @route '/backoffice/quizzes/{quiz}/edit'
 */
edit.get = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\QuizController::edit
 * @see app/Http/Controllers/Admin/QuizController.php:199
 * @route '/backoffice/quizzes/{quiz}/edit'
 */
edit.head = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\QuizController::edit
 * @see app/Http/Controllers/Admin/QuizController.php:199
 * @route '/backoffice/quizzes/{quiz}/edit'
 */
    const editForm = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\QuizController::edit
 * @see app/Http/Controllers/Admin/QuizController.php:199
 * @route '/backoffice/quizzes/{quiz}/edit'
 */
        editForm.get = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\QuizController::edit
 * @see app/Http/Controllers/Admin/QuizController.php:199
 * @route '/backoffice/quizzes/{quiz}/edit'
 */
        editForm.head = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Admin\QuizController::update
 * @see app/Http/Controllers/Admin/QuizController.php:232
 * @route '/backoffice/quizzes/{quiz}'
 */
export const update = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/backoffice/quizzes/{quiz}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\QuizController::update
 * @see app/Http/Controllers/Admin/QuizController.php:232
 * @route '/backoffice/quizzes/{quiz}'
 */
update.url = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quiz: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { quiz: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    quiz: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        quiz: typeof args.quiz === 'object'
                ? args.quiz.id
                : args.quiz,
                }

    return update.definition.url
            .replace('{quiz}', parsedArgs.quiz.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QuizController::update
 * @see app/Http/Controllers/Admin/QuizController.php:232
 * @route '/backoffice/quizzes/{quiz}'
 */
update.put = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\QuizController::update
 * @see app/Http/Controllers/Admin/QuizController.php:232
 * @route '/backoffice/quizzes/{quiz}'
 */
    const updateForm = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\QuizController::update
 * @see app/Http/Controllers/Admin/QuizController.php:232
 * @route '/backoffice/quizzes/{quiz}'
 */
        updateForm.put = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Admin\QuizController::destroy
 * @see app/Http/Controllers/Admin/QuizController.php:275
 * @route '/backoffice/quizzes/{quiz}'
 */
export const destroy = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backoffice/quizzes/{quiz}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\QuizController::destroy
 * @see app/Http/Controllers/Admin/QuizController.php:275
 * @route '/backoffice/quizzes/{quiz}'
 */
destroy.url = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quiz: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { quiz: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    quiz: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        quiz: typeof args.quiz === 'object'
                ? args.quiz.id
                : args.quiz,
                }

    return destroy.definition.url
            .replace('{quiz}', parsedArgs.quiz.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QuizController::destroy
 * @see app/Http/Controllers/Admin/QuizController.php:275
 * @route '/backoffice/quizzes/{quiz}'
 */
destroy.delete = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\QuizController::destroy
 * @see app/Http/Controllers/Admin/QuizController.php:275
 * @route '/backoffice/quizzes/{quiz}'
 */
    const destroyForm = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\QuizController::destroy
 * @see app/Http/Controllers/Admin/QuizController.php:275
 * @route '/backoffice/quizzes/{quiz}'
 */
        destroyForm.delete = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Admin\QuizController::toggleActive
 * @see app/Http/Controllers/Admin/QuizController.php:286
 * @route '/backoffice/quizzes/{quiz}/toggle-active'
 */
export const toggleActive = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleActive.url(args, options),
    method: 'post',
})

toggleActive.definition = {
    methods: ["post"],
    url: '/backoffice/quizzes/{quiz}/toggle-active',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\QuizController::toggleActive
 * @see app/Http/Controllers/Admin/QuizController.php:286
 * @route '/backoffice/quizzes/{quiz}/toggle-active'
 */
toggleActive.url = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quiz: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { quiz: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    quiz: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        quiz: typeof args.quiz === 'object'
                ? args.quiz.id
                : args.quiz,
                }

    return toggleActive.definition.url
            .replace('{quiz}', parsedArgs.quiz.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QuizController::toggleActive
 * @see app/Http/Controllers/Admin/QuizController.php:286
 * @route '/backoffice/quizzes/{quiz}/toggle-active'
 */
toggleActive.post = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: toggleActive.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\QuizController::toggleActive
 * @see app/Http/Controllers/Admin/QuizController.php:286
 * @route '/backoffice/quizzes/{quiz}/toggle-active'
 */
    const toggleActiveForm = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggleActive.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\QuizController::toggleActive
 * @see app/Http/Controllers/Admin/QuizController.php:286
 * @route '/backoffice/quizzes/{quiz}/toggle-active'
 */
        toggleActiveForm.post = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggleActive.url(args, options),
            method: 'post',
        })
    
    toggleActive.form = toggleActiveForm
/**
* @see \App\Http\Controllers\Admin\QuizController::duplicate
 * @see app/Http/Controllers/Admin/QuizController.php:296
 * @route '/backoffice/quizzes/{quiz}/duplicate'
 */
export const duplicate = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: duplicate.url(args, options),
    method: 'post',
})

duplicate.definition = {
    methods: ["post"],
    url: '/backoffice/quizzes/{quiz}/duplicate',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\QuizController::duplicate
 * @see app/Http/Controllers/Admin/QuizController.php:296
 * @route '/backoffice/quizzes/{quiz}/duplicate'
 */
duplicate.url = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { quiz: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { quiz: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    quiz: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        quiz: typeof args.quiz === 'object'
                ? args.quiz.id
                : args.quiz,
                }

    return duplicate.definition.url
            .replace('{quiz}', parsedArgs.quiz.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\QuizController::duplicate
 * @see app/Http/Controllers/Admin/QuizController.php:296
 * @route '/backoffice/quizzes/{quiz}/duplicate'
 */
duplicate.post = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: duplicate.url(args, options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\QuizController::duplicate
 * @see app/Http/Controllers/Admin/QuizController.php:296
 * @route '/backoffice/quizzes/{quiz}/duplicate'
 */
    const duplicateForm = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: duplicate.url(args, options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\QuizController::duplicate
 * @see app/Http/Controllers/Admin/QuizController.php:296
 * @route '/backoffice/quizzes/{quiz}/duplicate'
 */
        duplicateForm.post = (args: { quiz: number | { id: number } } | [quiz: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: duplicate.url(args, options),
            method: 'post',
        })
    
    duplicate.form = duplicateForm
const QuizController = { index, create, store, show, edit, update, destroy, toggleActive, duplicate }

export default QuizController