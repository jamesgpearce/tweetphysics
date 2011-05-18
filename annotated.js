physics =
function (          // a function which takes
    a,              // an array of entities with
                    // position, speed & acceleration properties:
                    // x, y, dx, dy, ddx, ddy
    b,c,d,e,f       // and which uses some other variables
) {                 // and which performs
    for(                // a loop from
        b=0,            // the first entity,
        c=a.length,     // (of which there are this many),
        d=[             // which uses, in order, the properties of
            'dx',           // speed on X axis
            'dy',           // speed on Y axis
            'x',            // position on X axis
            'y'             // position on Y axis
        ],
        e=d.length;     // (of which there are this many),
        b<c;            // up to the last entity,
        b++             // and which, for each,
    ) {                 // performs:
        for(                // a loop from
            f=0;            // the first entity,
            f<e;            // up to the last entity,
            f++             // and which, for each,
        ){                  // performs:
            a[b][               // the entity's
                d[f]            // property
            ]+=                 // incremented by
            a[b][               // the entity's
                'd'+d[f]        // property's rate of change
            ];
        }
    }
};

