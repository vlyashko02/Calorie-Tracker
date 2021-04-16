﻿using System.Threading.Tasks;

namespace CaloriesTracker.Contracts
{
    public interface IRepositoryManager
    {
        IUserRepository User { get; }
        IIngredientRepository Ingredient { get; }
        IExerciseRepository Exercise { get; }
        IActivityRepository Activity { get; }
        IEatingRepository Eating { get; }
        IRecipeRepository Recipe { get; }

        Task SaveAsync();
    }
}
