﻿using System;
using System.Collections.Generic;
using System.Linq;

namespace CaloriesTracker.Entities.Models
{
    public class Eating
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public DateTime Moment { get; set; }
        public float TotalCalories
        {
            get
            {
                var calor = IngredientsWithGrams.Sum(x => x.Ingredient.Calories * x.Grams / 100.0f);
                return calor;
            }
            set { }
        }
        public Guid UserProfileId { get; set; }
        public UserProfile UserProfile { get; set; }
        public virtual IEnumerable<IngredientEating> IngredientsWithGrams { get; set; }

        public Eating()
        {
            IngredientsWithGrams = new List<IngredientEating>();
        }
    }
}
