function calcGrades() {
    //grab values from the form

    assignments = parseFloat($("#assignments").val());
    group = parseFloat($("#group").val());
    quiz = parseFloat($("#quiz").val());
    mid = parseFloat($("#mid").val());
    final = parseFloat($("#final").val());
    intex = parseFloat($("#intex").val());

    //change to appropriate weights
    assignments = assignments * .5;
    group = group * .1;
    quiz = quiz * .1
    mid = mid * .1;
    final = final * .1;
    intex = intex * .1;

    //calculate final grade
    final = Math.round((assignments + group + quiz + mid + final + intex), 2);

    //decide what letter grade
    if (final >= 94) {
        grade = 'A';
    }
    else if (final >= 90) {
        grade = 'A-';
    }
    else if (final >= 87) {
        grade = 'B+';
    }
    else if (final >= 84) {
        grade = 'B';
    }
    else if (final >= 80) {
        grade = 'B-';
    }
    else if (final >= 77) {
        grade = 'C+';
    }
    else if (final >= 74) {
        grade = 'C';
    }
    else if (final >= 70) {
        grade = 'C-';
    }
    else if (final >= 67) {
        grade = 'D+';
    }
    else if (final >= 64) {
        grade = 'D';
    }
    else if (final >= 60) {
        grade = 'D';
    }
    else {
        grade = 'E';
    }

    //output final grade
    $("#output").val(grade);

};