﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace mission4_isaacmel.Models
{
    //model for the calculator form
    public class CalculatorModel
    {
        [Required]
        [Range(0, 100)]
        public int Assignments { get; set; }

        [Required]
        [Range(0, 100)]
        public int Group { get; set; }

        [Required]
        [Range(0, 100)]
        public int Quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int Midterm { get; set; }

        [Required]
        [Range(0, 100)]
        public int Final { get; set; }

        [Required]
        [Range(0, 100)]
        public int Intex { get; set; }
    }
}
