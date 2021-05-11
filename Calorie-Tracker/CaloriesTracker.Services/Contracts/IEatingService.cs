﻿using CaloriesTracker.Entities.DataTransferObjects;
using Marvin.JsonPatch;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace CaloriesTracker.Services.Interfaces
{
    public interface IEatingService
    {
        Task<IEnumerable<EatingForReadDto>> GetEatingsForUserProfileForDateAsync(Guid id);
        Task<IEnumerable<EatingForReadDto>> GetEatingsForUserProfilePerDaysAsync(Guid id, int days);
        Task<EatingForReadDto> CreateEatingForUserProfileAsync(Guid id, EatingForCreateDto eatingDto);
        Task<EatingForReadDto> GetEatingAsync(Guid eatingId);
        Task<MessageDetailsDto> DeleteEatingAsync(Guid eatingId);
        Task<MessageDetailsDto> UpdateEatingAsync(Guid eatingId, EatingForUpdateDto eatingDto);
        Task<MessageDetailsDto> PartiallyUpdateEatingAsync(Guid eatingId, JsonPatchDocument<EatingForUpdateDto> patchDoc);
    }
}
