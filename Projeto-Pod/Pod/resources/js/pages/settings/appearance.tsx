import { Head, usePage } from '@inertiajs/react';
import AppearanceTabs from '@/components/settings/appearance-tabs';
import HeadingSmall from '@/components/common/heading-small';
import { type SharedData } from '@/types';
import StudentLayout from '@/layouts/student/student-layout';
import AdminLayout from '@/layouts/admin/admin-layout';
import SettingsLayout from '@/layouts/settings/layout';

export default function Appearance() {
    const { auth } = usePage<SharedData>().props;
    const Layout = auth.user.role === 'admin' ? AdminLayout : StudentLayout;

    return (
        <Layout>
            <Head title="Appearance settings" />

            <SettingsLayout>
                <div className="space-y-6">
                    <HeadingSmall
                        title="Appearance settings"
                        description="Update your account's appearance settings"
                    />
                    <AppearanceTabs />
                </div>
            </SettingsLayout>
        </Layout>
    );
}
