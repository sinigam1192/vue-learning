module.exports = function (source, map) {
    console.log("read loader.js")
    this.callback(
        null,
        `export default function (Component) {
            Component.options._docs = ${
                JSON.stringify(source)
            }
        }`,
        map
    )
}