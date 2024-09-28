<?php

namespace App\Policies;

use App\Models\Team;
use App\Models\User;
use App\Models\Tenant;
use App\Models\Landlord;
use App\Models\Company;
use Illuminate\Auth\Access\HandlesAuthorization;

class TeamPolicy
{
    use HandlesAuthorization;

    /**
     * Determine whether the user (or tenant/landlord/company) can view any models.
     */
    public function viewAny(User|Tenant|Landlord|Company $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user (or tenant/landlord/company) can view the model.
     */
    public function view(User|Tenant|Landlord|Company $user, Team $team): bool
    {
        return $this->belongsToTeam($user, $team);
    }

    /**
     * Determine whether the user (or tenant/landlord/company) can create models.
     */
    public function create(User|Tenant|Landlord|Company $user): bool
    {
        return true;
    }

    /**
     * Determine whether the user (or tenant/landlord/company) can update the model.
     */
    public function update(User|Tenant|Landlord|Company $user, Team $team): bool
    {
        return $this->ownsTeam($user, $team);
    }

    /**
     * Determine whether the user (or tenant/landlord/company) can add team members.
     */
    public function addTeamMember(User|Tenant|Landlord|Company $user, Team $team): bool
    {
        return $this->ownsTeam($user, $team);
    }

    /**
     * Determine whether the user (or tenant/landlord/company) can update team member permissions.
     */
    public function updateTeamMember(User|Tenant|Landlord|Company $user, Team $team): bool
    {
        return $this->ownsTeam($user, $team);
    }

    /**
     * Determine whether the user (or tenant/landlord/company) can remove team members.
     */
    public function removeTeamMember(User|Tenant|Landlord|Company $user, Team $team): bool
    {
        return $this->ownsTeam($user, $team);
    }

    /**
     * Determine whether the user (or tenant/landlord/company) can delete the model.
     */
    public function delete(User|Tenant|Landlord|Company $user, Team $team): bool
    {
        return $this->ownsTeam($user, $team);
    }

    /**
     * Helper method to check if a user/tenant/landlord/company belongs to a team.
     */
    private function belongsToTeam($user, Team $team): bool
    {
        return $user->teams->contains($team);
    }

    /**
     * Helper method to check if a user/tenant/landlord/company owns a team.
     */
    private function ownsTeam($user, Team $team): bool
    {
        return $team->user_id === $user->id;
    }
}
