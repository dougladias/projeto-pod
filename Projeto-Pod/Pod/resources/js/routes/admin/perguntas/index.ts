import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Admin\PerguntaController::index
 * @see app/Http/Controllers/Admin/PerguntaController.php:18
 * @route '/backoffice/perguntas'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/backoffice/perguntas',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PerguntaController::index
 * @see app/Http/Controllers/Admin/PerguntaController.php:18
 * @route '/backoffice/perguntas'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PerguntaController::index
 * @see app/Http/Controllers/Admin/PerguntaController.php:18
 * @route '/backoffice/perguntas'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PerguntaController::index
 * @see app/Http/Controllers/Admin/PerguntaController.php:18
 * @route '/backoffice/perguntas'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PerguntaController::index
 * @see app/Http/Controllers/Admin/PerguntaController.php:18
 * @route '/backoffice/perguntas'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PerguntaController::index
 * @see app/Http/Controllers/Admin/PerguntaController.php:18
 * @route '/backoffice/perguntas'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PerguntaController::index
 * @see app/Http/Controllers/Admin/PerguntaController.php:18
 * @route '/backoffice/perguntas'
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
* @see \App\Http\Controllers\Admin\PerguntaController::create
 * @see app/Http/Controllers/Admin/PerguntaController.php:63
 * @route '/backoffice/perguntas/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/backoffice/perguntas/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PerguntaController::create
 * @see app/Http/Controllers/Admin/PerguntaController.php:63
 * @route '/backoffice/perguntas/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PerguntaController::create
 * @see app/Http/Controllers/Admin/PerguntaController.php:63
 * @route '/backoffice/perguntas/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PerguntaController::create
 * @see app/Http/Controllers/Admin/PerguntaController.php:63
 * @route '/backoffice/perguntas/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PerguntaController::create
 * @see app/Http/Controllers/Admin/PerguntaController.php:63
 * @route '/backoffice/perguntas/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PerguntaController::create
 * @see app/Http/Controllers/Admin/PerguntaController.php:63
 * @route '/backoffice/perguntas/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PerguntaController::create
 * @see app/Http/Controllers/Admin/PerguntaController.php:63
 * @route '/backoffice/perguntas/create'
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
* @see \App\Http\Controllers\Admin\PerguntaController::store
 * @see app/Http/Controllers/Admin/PerguntaController.php:78
 * @route '/backoffice/perguntas'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/backoffice/perguntas',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Admin\PerguntaController::store
 * @see app/Http/Controllers/Admin/PerguntaController.php:78
 * @route '/backoffice/perguntas'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PerguntaController::store
 * @see app/Http/Controllers/Admin/PerguntaController.php:78
 * @route '/backoffice/perguntas'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Admin\PerguntaController::store
 * @see app/Http/Controllers/Admin/PerguntaController.php:78
 * @route '/backoffice/perguntas'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PerguntaController::store
 * @see app/Http/Controllers/Admin/PerguntaController.php:78
 * @route '/backoffice/perguntas'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Admin\PerguntaController::show
 * @see app/Http/Controllers/Admin/PerguntaController.php:123
 * @route '/backoffice/perguntas/{pergunta}'
 */
export const show = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/backoffice/perguntas/{pergunta}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PerguntaController::show
 * @see app/Http/Controllers/Admin/PerguntaController.php:123
 * @route '/backoffice/perguntas/{pergunta}'
 */
show.url = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pergunta: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id_pergunta' in args) {
            args = { pergunta: args.id_pergunta }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pergunta: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pergunta: typeof args.pergunta === 'object'
                ? args.pergunta.id_pergunta
                : args.pergunta,
                }

    return show.definition.url
            .replace('{pergunta}', parsedArgs.pergunta.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PerguntaController::show
 * @see app/Http/Controllers/Admin/PerguntaController.php:123
 * @route '/backoffice/perguntas/{pergunta}'
 */
show.get = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PerguntaController::show
 * @see app/Http/Controllers/Admin/PerguntaController.php:123
 * @route '/backoffice/perguntas/{pergunta}'
 */
show.head = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PerguntaController::show
 * @see app/Http/Controllers/Admin/PerguntaController.php:123
 * @route '/backoffice/perguntas/{pergunta}'
 */
    const showForm = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PerguntaController::show
 * @see app/Http/Controllers/Admin/PerguntaController.php:123
 * @route '/backoffice/perguntas/{pergunta}'
 */
        showForm.get = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PerguntaController::show
 * @see app/Http/Controllers/Admin/PerguntaController.php:123
 * @route '/backoffice/perguntas/{pergunta}'
 */
        showForm.head = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\PerguntaController::edit
 * @see app/Http/Controllers/Admin/PerguntaController.php:179
 * @route '/backoffice/perguntas/{pergunta}/edit'
 */
export const edit = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/backoffice/perguntas/{pergunta}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PerguntaController::edit
 * @see app/Http/Controllers/Admin/PerguntaController.php:179
 * @route '/backoffice/perguntas/{pergunta}/edit'
 */
edit.url = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pergunta: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id_pergunta' in args) {
            args = { pergunta: args.id_pergunta }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pergunta: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pergunta: typeof args.pergunta === 'object'
                ? args.pergunta.id_pergunta
                : args.pergunta,
                }

    return edit.definition.url
            .replace('{pergunta}', parsedArgs.pergunta.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PerguntaController::edit
 * @see app/Http/Controllers/Admin/PerguntaController.php:179
 * @route '/backoffice/perguntas/{pergunta}/edit'
 */
edit.get = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PerguntaController::edit
 * @see app/Http/Controllers/Admin/PerguntaController.php:179
 * @route '/backoffice/perguntas/{pergunta}/edit'
 */
edit.head = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PerguntaController::edit
 * @see app/Http/Controllers/Admin/PerguntaController.php:179
 * @route '/backoffice/perguntas/{pergunta}/edit'
 */
    const editForm = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PerguntaController::edit
 * @see app/Http/Controllers/Admin/PerguntaController.php:179
 * @route '/backoffice/perguntas/{pergunta}/edit'
 */
        editForm.get = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PerguntaController::edit
 * @see app/Http/Controllers/Admin/PerguntaController.php:179
 * @route '/backoffice/perguntas/{pergunta}/edit'
 */
        editForm.head = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
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
* @see \App\Http\Controllers\Admin\PerguntaController::update
 * @see app/Http/Controllers/Admin/PerguntaController.php:210
 * @route '/backoffice/perguntas/{pergunta}'
 */
export const update = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put"],
    url: '/backoffice/perguntas/{pergunta}',
} satisfies RouteDefinition<["put"]>

/**
* @see \App\Http\Controllers\Admin\PerguntaController::update
 * @see app/Http/Controllers/Admin/PerguntaController.php:210
 * @route '/backoffice/perguntas/{pergunta}'
 */
update.url = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pergunta: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id_pergunta' in args) {
            args = { pergunta: args.id_pergunta }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pergunta: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pergunta: typeof args.pergunta === 'object'
                ? args.pergunta.id_pergunta
                : args.pergunta,
                }

    return update.definition.url
            .replace('{pergunta}', parsedArgs.pergunta.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PerguntaController::update
 * @see app/Http/Controllers/Admin/PerguntaController.php:210
 * @route '/backoffice/perguntas/{pergunta}'
 */
update.put = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

    /**
* @see \App\Http\Controllers\Admin\PerguntaController::update
 * @see app/Http/Controllers/Admin/PerguntaController.php:210
 * @route '/backoffice/perguntas/{pergunta}'
 */
    const updateForm = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PerguntaController::update
 * @see app/Http/Controllers/Admin/PerguntaController.php:210
 * @route '/backoffice/perguntas/{pergunta}'
 */
        updateForm.put = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\PerguntaController::destroy
 * @see app/Http/Controllers/Admin/PerguntaController.php:262
 * @route '/backoffice/perguntas/{pergunta}'
 */
export const destroy = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/backoffice/perguntas/{pergunta}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Admin\PerguntaController::destroy
 * @see app/Http/Controllers/Admin/PerguntaController.php:262
 * @route '/backoffice/perguntas/{pergunta}'
 */
destroy.url = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { pergunta: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id_pergunta' in args) {
            args = { pergunta: args.id_pergunta }
        }
    
    if (Array.isArray(args)) {
        args = {
                    pergunta: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        pergunta: typeof args.pergunta === 'object'
                ? args.pergunta.id_pergunta
                : args.pergunta,
                }

    return destroy.definition.url
            .replace('{pergunta}', parsedArgs.pergunta.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PerguntaController::destroy
 * @see app/Http/Controllers/Admin/PerguntaController.php:262
 * @route '/backoffice/perguntas/{pergunta}'
 */
destroy.delete = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Admin\PerguntaController::destroy
 * @see app/Http/Controllers/Admin/PerguntaController.php:262
 * @route '/backoffice/perguntas/{pergunta}'
 */
    const destroyForm = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Admin\PerguntaController::destroy
 * @see app/Http/Controllers/Admin/PerguntaController.php:262
 * @route '/backoffice/perguntas/{pergunta}'
 */
        destroyForm.delete = (args: { pergunta: number | { id_pergunta: number } } | [pergunta: number | { id_pergunta: number } ] | number | { id_pergunta: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Admin\PerguntaController::statistics
 * @see app/Http/Controllers/Admin/PerguntaController.php:280
 * @route '/backoffice/perguntas-statistics'
 */
export const statistics = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statistics.url(options),
    method: 'get',
})

statistics.definition = {
    methods: ["get","head"],
    url: '/backoffice/perguntas-statistics',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Admin\PerguntaController::statistics
 * @see app/Http/Controllers/Admin/PerguntaController.php:280
 * @route '/backoffice/perguntas-statistics'
 */
statistics.url = (options?: RouteQueryOptions) => {
    return statistics.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Admin\PerguntaController::statistics
 * @see app/Http/Controllers/Admin/PerguntaController.php:280
 * @route '/backoffice/perguntas-statistics'
 */
statistics.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: statistics.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Admin\PerguntaController::statistics
 * @see app/Http/Controllers/Admin/PerguntaController.php:280
 * @route '/backoffice/perguntas-statistics'
 */
statistics.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: statistics.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Admin\PerguntaController::statistics
 * @see app/Http/Controllers/Admin/PerguntaController.php:280
 * @route '/backoffice/perguntas-statistics'
 */
    const statisticsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: statistics.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Admin\PerguntaController::statistics
 * @see app/Http/Controllers/Admin/PerguntaController.php:280
 * @route '/backoffice/perguntas-statistics'
 */
        statisticsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: statistics.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Admin\PerguntaController::statistics
 * @see app/Http/Controllers/Admin/PerguntaController.php:280
 * @route '/backoffice/perguntas-statistics'
 */
        statisticsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: statistics.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    statistics.form = statisticsForm
const perguntas = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
statistics: Object.assign(statistics, statistics),
}

export default perguntas