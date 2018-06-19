window.curly = (function() {

    return function(input, childAsParent = false) {

        var prevIndent, tempLiteral
        var arr = []
        var string = ''
        var INDENT = /[^ \t]/

        if (Array.isArray(input)) {
            var str = input
        } else {
            var str = input.split(/\n/)
            tempLiteral = true
        }

        // First adjustment
        str.forEach((el) => {
            var _indent = el.match(INDENT).index
            var obj = {}
            obj.indent = _indent
            obj.str = el.substring(_indent)
            arr.push(obj)
        })

        // Get indentation preference
        var i = 1
        var indents = arr.map(el => el.indent)
        indents.some((el, j) => {
            i = j
            return el > 0
        })
        var divisor = indents[i]
        if (tempLiteral) {
            arr.map(el => el.indent -= divisor - 1)
            arr[0].indent = 0
        } else {
            arr.map(el => el.indent /= divisor)
        }

        // Convert
        arr.forEach((el) => {
            if (el.indent === prevIndent) {
                string += '}'
            } else if (el.indent < prevIndent) {
                string += '}'.repeat(prevIndent - el.indent + 1);
            }
            string += el.str + '{';
            prevIndent = el.indent
        })
        if (0 === prevIndent) {
            string += '}';
        } else if (0 < prevIndent) {
            string += '}'.repeat(prevIndent + 1);
        }

        // Optional
        if (childAsParent) {
            string = string.replace(/{}/g, ',').replace(/,}/g, '}')
        }

        return string

    }
    
}());