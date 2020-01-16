import { Example, Page1, Page2 } from '@/app/views/example/index';

export function ExampleRoute(path = '/Example') {
    return {
        path: path,
        component: Example,
        label: '资源管理',
        children: [
            { path: '', name: '', component: Page1 },
            { path: 'Page1', name: 'Page1', component: Page1 },
            { path: 'Page2', name: 'Page2', component: Page2 }
        ]
    };
}