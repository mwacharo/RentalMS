<?php

// namespace App\Actions\Fortify;

// use App\Models\Company;
// use App\Models\Landlord;
// use App\Models\Team;
// use App\Models\Tenant;
// use App\Models\User;
// use Illuminate\Support\Facades\DB;
// use Illuminate\Support\Facades\Hash;
// use Illuminate\Support\Facades\Log;
// use Illuminate\Support\Facades\Validator;
// use Laravel\Fortify\Contracts\CreatesNewUsers;
// use Laravel\Jetstream\Jetstream;

// class CreateNewUser implements CreatesNewUsers
// {
//     use PasswordValidationRules;

//     /**
//      * Create a newly registered user.
//      *
//      * @param  array<string, string>  $input
//      */
//     public function create(array $input)
//     {
//         // Log or dump the input to check the data
//         Log::info('User Registration Input:', $input);
//         // or use dd() for immediate output and stop execution
//         // dd($input);

//         Validator::make($input, [
//             'name' => ['required', 'string', 'max:255'],
//             'email' => [
//                 'required', 'string', 'email', 'max:255',
//                 function ($attribute, $value, $fail) {
//                     $tables = ['users', 'tenants', 'landlords', 'companies'];
//                     foreach ($tables as $table) {
//                         if (DB::table($table)->where('email', $value)->exists()) {
//                             return $fail(__('The email has already been taken.'));
//                         }
//                     }
//                 },
//             ],
//             'password' => $this->passwordRules(),
//             'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
//             'user_type' => ['required', 'in:Tenant,Landlord,Company,User'], // Validate user type
//         ])->validate();

//         return DB::transaction(function () use ($input) {
//             $userType = $input['user_type'];

//             // Debug user type and other details
//             Log::info('Creating user of type:', [$userType]);
//             // or use dd() to inspect
//             // dd($userType);

//             switch ($userType) {
//                 case 'Tenant':
//                     $user = Tenant::create([
//                         'tenant_name' => $input['name'], // Ensure correct field names
//                         'email' => $input['email'],
//                         'password' => Hash::make($input['password']),
//                     ]);
//                     Log::info('Created Tenant:', [$user]);
//                     $user->assignRole('tenant');
//                     break;

//                 case 'Landlord':
//                     $user = Landlord::create([
//                         'landlord_name' => $input['name'], // Ensure correct field names
//                         'email' => $input['email'],
//                         'password' => Hash::make($input['password']),
//                     ]);
//                     Log::info('Created Landlord:', [$user]);
//                     $user->assignRole('landlord');
//                     break;

//                 case 'Company':
//                     $user = Company::create([
//                         'company_name' => $input['name'], // Ensure correct field names
//                         'email' => $input['email'],
//                         'password' => Hash::make($input['password']),
//                     ]);
//                     Log::info('Created Company:', [$user]);
//                     $user->assignRole('company');
//                     break;

//                 default:
//                     // Default to the User model if no other type is selected
//                     $user = User::create([
//                         'name' => $input['name'],
//                         'email' => $input['email'],
//                         'password' => Hash::make($input['password']),
//                     ]);
//                     Log::info('Created User:', [$user]);
//                     $user->assignRole('user'); // Assign role
//                     // $this->createTeam($user); // Create a team if needed
//                     break;
//             }

//             return $user;
//         });
//     }

//     /**
//      * Create a personal team for the user.
//      */
//     // protected function createTeam(User $user): void

//     protected function createTeam(User|Company $user): void
//     {
//         $team = Team::forceCreate([
//             'user_id' => $user->id,
//             'name' => explode(' ', $user->name, 2)[0] . "'s Team",
//             'personal_team' => true,
//         ]);

//         // Debug team creation
//         Log::info('Created Team for User:', [$team]);
//         $user->ownedTeams()->save($team);
//     }
// }


namespace App\Actions\Fortify;

use App\Models\Company;
use App\Models\Landlord;
use App\Models\Team;
use App\Models\Tenant;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;
use Laravel\Fortify\Contracts\CreatesNewUsers;
use Laravel\Jetstream\Jetstream;

class CreateNewUser implements CreatesNewUsers
{
    use PasswordValidationRules;

    /**
     * Create a newly registered user.
     *
     * @param  array<string, string>  $input
     */
    public function create(array $input)
    {
        Log::info('User Registration Input:', $input);

        Validator::make($input, [
            'name' => ['required', 'string', 'max:255'],
            'email' => [
                'required', 'string', 'email', 'max:255',
                function ($attribute, $value, $fail) {
                    $tables = ['users', 'tenants', 'landlords', 'companies'];
                    foreach ($tables as $table) {
                        if (DB::table($table)->where('email', $value)->exists()) {
                            return $fail(__('The email has already been taken.'));
                        }
                    }
                },
            ],
            'password' => $this->passwordRules(),
            'terms' => Jetstream::hasTermsAndPrivacyPolicyFeature() ? ['accepted', 'required'] : '',
            'user_type' => ['required', 'in:Tenant,Landlord,Company,User'], // Validate user type
        ])->validate();

        return DB::transaction(function () use ($input) {
            $userType = $input['user_type'];

            Log::info('Creating user of type:', [$userType]);

            switch ($userType) {
                case 'Tenant':
                    $user = Tenant::create([
                        'tenant_name' => $input['name'],
                        'email' => $input['email'],
                        'password' => Hash::make($input['password']),
                    ]);
                    Log::info('Created Tenant:', [$user]);
                    $user->assignRole('tenant');
                    break;

                case 'Landlord':
                    $user = Landlord::create([
                        'landlord_name' => $input['name'],
                        'email' => $input['email'],
                        'password' => Hash::make($input['password']),
                    ]);
                    Log::info('Created Landlord:', [$user]);
                    $user->assignRole('landlord');
                    break;

                case 'Company':
                    $user = Company::create([
                        'company_name' => $input['name'],
                        'email' => $input['email'],
                        'password' => Hash::make($input['password']),
                    ]);
                    Log::info('Created Company:', [$user]);
                    $user->assignRole('company');
                    break;

                default:
                    $user = User::create([
                        'name' => $input['name'],
                        'email' => $input['email'],
                        'password' => Hash::make($input['password']),
                    ]);
                    Log::info('Created User:', [$user]);
                    $user->assignRole('user');
                    break;
            }

            // Create team if applicable
            $this->createTeam($user);

            return $user;
        });
    }

    /**
     * Create a personal team for the user or company.
     */
    protected function createTeam($user): void
    {
        // Checking user type and assigning a default team name
        if ($user instanceof Company) {
            $teamName = $user->company_name . "'s Team";
        } elseif ($user instanceof Tenant) {
            $teamName = $user->tenant_name . "'s Team";
        } elseif ($user instanceof Landlord) {
            $teamName = $user->landlord_name . "'s Team";
        } else {
            $teamName = $user->name . "'s Team";
        }

        // Creating the team
        $team = Team::forceCreate([
            'user_id' => $user->id,
            'name' => $teamName,
            'personal_team' => true,
        ]);

        Log::info('Created Team for User:', [$team]);
        // $user->ownedTeams()->save($team);
    }
}

