<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        $adminPermissions = [
            'index report',
            'show report',
            'create report',
            'update report',
            'delete report',
            'validate',
            'index user',
            'show user',
            'create user',
            'update user',
            'delete user',
            'index static',
            'show static',
            'create static',
            'update static',
            'delete static',
        ];

        $validatorPermissions = [
            'index report',
            'show report',
            'create report',
            'validate',
            'index static',
            'show static',
        ];

        $userPermissions = [
            'index report',
            'show report',
            'create report',
            'index static',
            'show static',
        ];

        foreach ($adminPermissions as $permission) {
            Permission::create(['name' => $permission]);
        }

        // create roles and assign existing permissions
        $adminRole = Role::create(['name' => 'admin']);
        foreach ($adminPermissions as $permission) {
            $adminRole->givePermissionTo($permission);
        }

        $validatorRole = Role::create(['name' => 'validator']);
        foreach ($validatorPermissions as $permission) {
            $validatorRole->givePermissionTo($permission);
        }

        $userRole = Role::create(['name' => 'user']);
        foreach ($userPermissions as $permission) {
            $userRole->givePermissionTo($permission);
        }

        // create demo users
        $user = \App\Models\User::factory()->create([
            'name' => 'Example User',
            'email' => 'test@example.com',
        ]);
        $user->assignRole($userRole);

        $user = \App\Models\User::factory()->create([
            'name' => 'Example Admin User',
            'email' => 'admin@example.com',
        ]);
        $user->assignRole($adminRole);

        $user = \App\Models\User::factory()->create([
            'name' => 'Example Validator User',
            'email' => 'superadmin@example.com',
        ]);
        $user->assignRole($validatorRole);
    }
}
