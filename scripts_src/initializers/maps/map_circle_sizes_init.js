var utils_main = require("../../utils/utils_main.js");

/** Given an array of map circles, this sorts them by value and decides what radius they should have 
@module
**/

var map_circle_sizes_init = {

    /** Given an array of map circles, this sorts them by value and decides what radius they should have  **/
    getCircleSizes: function (all_map_options) {

        all_map_options.circle_size_multiple = 101 - $("#map_circle_size_range").val();

        var circle_values_arr = utils_main.valueSort(all_map_options.areas);

        //assign R value to each circle area

        $(all_map_options.areas).each(function () {

            var this_area = this.value ? (Math.abs(this.value) / all_map_options.circle_size_multiple) || 1 : 0;
            this.r = Math.sqrt(this_area / Math.PI);

        });
     
        map_circle_sizes_init.sortCircles(all_map_options.areas);

    },




    /** sorts circles so that smaller ones will appear on top in the map **/
    sortCircles: function (areas) {
        areas.sort(function (a, b) {

                if ((a.r && b.r === undefined) || (a.r && b.r === 0)) { //paths will go on the bottom
                    return 1;
                } else {
                    return b.r - a.r;
                }

            });

    }

};

module.exports = map_circle_sizes_init;