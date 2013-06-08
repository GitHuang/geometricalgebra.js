define(['underscore', 'multivectorterm'], function(_, mvt) {

module("MultiVectorTerm Tests");


test("MultiVectorTerm factor sets state.", function() {
    var examples = [
        {factor: 3.579, basis: [1, 3]},
        {factor: 4, basis: []}
    ];
    _.each(examples, function(example){
        var term = new mvt.MultiVectorTerm(example.factor, example.basis);

        ok(term.factor === example.factor, "Factor is set for term.");
        ok(_.isEqual(term.basis, example.basis),  "Basis are set for term.");
    });
});


test("MultiVectorTerm factor must be a number.", function() {
    var non_numbers = [
        "a",
        NaN
    ];
    _.each(non_numbers, function(non_number){
        throws(function() {mvt.MultiVectorTerm(non_number, []);},
               TypeError,
               "No error or incorrect error thrown for test value: " +
               non_number);
    });
});


test("MultiVectorTerm basis must be defined.", function() {
    throws(function() {new mvt.MultiVectorTerm(3.5);},
           TypeError,
           "The basis must be defined.");
});


test("MultiVectorTerm basis must be a array of integers only.", function() {
    var non_basis = [
        null,
        [null],
        [undefined],
        [2, 1, "a"],
        [2, 1, 3.3]
    ];
    _.each(non_basis, function(basis){
        throws(function() {mvt.MultiVectorTerm(3.5, basis);},
              TypeError,
              "The basis is an array of integers: " + basis);
    });
});

});