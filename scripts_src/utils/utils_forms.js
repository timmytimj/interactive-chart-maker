/**
 * Forms utility object, contains functions that work with form elements
 * @namespace
 */
var utils_forms = {

    /** when Unpack button (beautify_code_button) is clicked, this unpacks the JS output using beautify.js **/
    beautifyCode: (function () {
        $("#beautify_code_button").click(function () {

            var input = "<script>" + document.getElementById("chart_output_code").value + "</script>";
            var output = html_beautify(input);
            document.getElementById("chart_output_code").value = output.replace("<script>", "").replace("</script>", "");

            $(this).text("Unpacked!");
            setTimeout(function () {
                $("#beautify_code_button").text("Unpack");
            }, 10000)

        });

    })(),

    
    /** When clipboard icon is clicked, this copies the next <pre> text to a clipboard via a hidden textarea **/
    copyToClipBoard: (function () {
        $(".copy_to_clipboard_button").click(
            function () {

                var copied_text = $(this).nextAll("textarea:eq(0)").select();
                var copy_message_span = $(this).next().children(".copy_message");

                try {
                    var successful = document.execCommand('copy');
                    var msg = successful ? 'Copied!' : 'Not copied! Try again in a few seconds.';
                    copy_message_span.text(msg);

                    setTimeout(function () { //hide message after a bit
                        copy_message_span.text("");
                    }, 2000);

                } catch (err) {
                    alert("Your browser won't allow this to copy - please do it manually");
                }

            });
    })(),

    /** returns true if checkbox is checked, false if not 
    @param elem {element} checkbox element
    @returns {bool}
    */
    getCheckBoxValue: function getCheckBoxValue(elem) {
        return elem.is(':checked');
    },

    /** gets an array of values from a given class 
    @param class_name {string}
    @returns {array}
    */
    getClassValuesArray: function (class_name) {
        var arr = [];
        $("." + class_name).each(
            function () {
                arr.push(Number($(this).val()));
            }
        );
        return arr;
    },

    /** given a group of elements, this gives the index of an element with a class of "selected" **/
    getSelectedIndex: function (elem) {
        var selected_index = 0;
        elem.each(function (i) {
            if ($(this).hasClass("selected")) {
                selected_index = i;
            }
        });

        return selected_index;
    }


}

module.exports = utils_forms;