﻿using System;

namespace CaloriesTracker.Entities.DataTransferObjects
{
    public class IngredientForReadDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public float Calories { get; set; }
        public float Proteins { get; set; }
        public float Fats { get; set; }
        public float Carbohydrates { get; set; }
    }
}
