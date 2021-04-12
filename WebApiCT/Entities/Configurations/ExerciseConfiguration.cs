﻿using Entities.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;

namespace Entities.Configurations
{
    public class ExerciseConfiguration : IEntityTypeConfiguration<Exercise>
    {
        public void Configure(EntityTypeBuilder<Exercise> builder)
        {
            builder.HasData
            (
                new Exercise
                {
                    Id = new Guid("7c2a51b6-ffd3-4f82-8e21-92ca4053a37e"),
                    Name = "Подтягивания",
                    Description = "Выполняются на перекладине. Длительность 40 секунд",
                    CaloriesPerMinute = 5
                },
                new Exercise
                {
                    Id = new Guid ("291bf3d3-9c56-4f6c-b78e-9b100a2e7b55"),
                    Name = "Приседания",
                    Description = "20 раз за минуту",
                    CaloriesPerMinute = 10
                }
            );
        }
    }
}
