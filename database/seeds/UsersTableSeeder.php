<?php

use Illuminate\Database\Seeder;
use App\User;
use ZHXCore\ACL\Models\Activation;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::insert([
            'id'         => 1,
            'first_name' => 'ZHXCore',
            'username'   => 'ZHXCore',
            'email'      => 'evolutionitsolutions@gmail.com',
            'password'   => Hash::make('Portugal@2020')
        ]);

        Activation::insert([
            'id'        => 1,
            'user_id'   => 1,
            'completed' => 1
        ]);
    }
}
