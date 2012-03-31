/*
 * Unit tests for the horspool method using Andrea Giammarchi's wru framework.
 */
wru.test([{
    name: "Bad Input",
    test: function() {
        wru.assert(
            "both empty",
            horspool('','') === -1
        );
        wru.assert(
            "haystack empty",
            horspool('', 'abc') === -1
        );
        wru.assert(
            "needle empty",
            horspool('asdfgh', '') === -1
        );
        wru.assert(
            "needle too long",
            horspool('asdfgh', 'asdfgh1234') === -1
        );
    }
}, {
    name: "Trivial Matches",
    test: function() {
        wru.assert(
            "single characters",
            horspool('a','a') === 0
        );

        wru.assert(
            "same string 1",
            horspool('asdf','asdf') === 0
        );
        wru.assert(
            "same string 2",
            horspool('123','123') === 0
        );
        wru.assert(
            "same string 3",
            horspool('a1b29&','a1b29&') === 0
        );

        wru.assert(
            "single char at front",
            horspool('asdf', 'a') === 0
        );
        wru.assert(
            "single char at back",
            horspool('asdf', 'f') === 3
        );
        wru.assert(
            "single char in middle",
            horspool('asdf', 's') === 1
        );
    }
}, {
    name: "Trivial Failures",
    test: function() {
        wru.assert(
            "single characters",
            horspool('a','9') === -1
        );
        wru.assert(
            "single needle",
            horspool('asdf', 'Q') === -1
        );

        wru.assert(
            "different strings 1",
            horspool('a1b129&','asdf') === -1
        );
        wru.assert(
            "different strings 2",
            horspool('asdf','123') === -1
        );
        wru.assert(
            "different strings 3",
            horspool('1234567890','a1b129&') === -1
        );
    }
}, {
    name: "Complicated Searches",
    test: function() {
        wru.assert(
            "gcat 1",
            horspool('gcatcgcagagagtatacagtacg','gcagagag') === 5
        );
        wru.assert(
            "gcat 2",
            horspool('gcatcgcagagagtatacagtacg','gcatcg') === 0
        );
        wru.assert(
            "gcat 3",
            horspool('gcatcgcagagagtatacagtacg','gag') === 8
        );
        wru.assert(
            "gcat 4",
            horspool('gcatcgcagagagtatacagtacg','acg') === 21
        );
        wru.assert(
            "gcat 5",
            horspool('gcatcgcagagagtatacagtacg','ta') === 13
        );
    }
}, {
    name: "Unicode",
    test: function() {
        wru.assert(
            "The bebo in bebop",
            horspool('カウボーイビバップ', 'ビバ') == 5
        );
    }
}]);
