import { Admin, Page1, DashBoard } from '@/app/views/admin/index';

export function AdminRoute(path = '/Admin') {
    return {
        path: path,
        component: Admin,
        label: 'admin',
        children: [
            { path: '', name: 'DashBoard', component: DashBoard },
            { path: 'page4', name: 'Page4', component: Page1 },
        ]
    };
}