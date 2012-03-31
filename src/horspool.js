/**
 * This is an implementation of the common Boyer-Moore-Horspool string search
 * algorithm that takes advantage of certain characteristics inherent to the
 * JavaScript language.  Since JavaScript strings are Unicode aware and there
 * are built-in dictionary structures, I wrote the table generation to support
 * and take advantage of those.
 *
 * Caveats:
 *   Only strings (or falsy values) may be passed as arguments
 *   The prototype of Object must not be polluted
 */
function horspool(haystack, needle) {
    // fail for empty strings
    if (!haystack || !needle) {
        return -1;
    }

    // function to compute the shift values for all characters in needle
    function charJump(needle) {
        // 'nlen' and 'last' will be initialized before this function is called
        for (var s = 0, tbl = {esc: nlen}; s < last; ++s) {
            tbl[needle.charAt(s)] = last - s;
        }
        return tbl;
    }

    // this assumes Object.protype is clean and does not check 'hasOwnProperty'
    function getSkip(c) {
        // return the shift value, or 'nlen'
        //
        // we could access 'nlen' directly instead of using 'esc' on 'this',
        // but getSkip was not a nested function originally and so I decided
        // to just keep it this way
        return c in this ? this[c] : this.esc;
    }

    // yay variables
    var
        hlen = haystack.length,
        nlen = needle.length,
        last = nlen - 1,
        hi = 0,
        // run charJump to compute the table for needle and bind that to getSkip
        gs = bind(getSkip, charJump(needle));

    // run search within the limits of possibility
    while (hlen >= nlen) {
        // compare needle to haystack at index 'hi', in reverse
        for (var s = last; haystack.charAt(hi+s) === needle.charAt(s); --s) {
            // if all of needle matched, return the index
            if (0 === s) {
                return hi;
            }
        }

        // move indices by the skip value and try again
        var skip = gs(haystack.charAt(hi+last));
        hlen -= skip;
        hi += skip;
    }

    // fail for no match
    return -1;
}

/**
 * Simple, non-robust bind method. Because IE8 doesn't support Function.bind
 */
function bind(fn, that) {
    return function() {
        return fn.apply(that, arguments);
    }
}
