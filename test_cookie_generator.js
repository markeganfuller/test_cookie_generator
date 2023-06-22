// Random word generation from:
// <https://byrayray.dev/posts/2022-02-02_create-your-own-ipsum-generator-with-javascript-3241077570e2>

const words = [
    "bob",
    "fred",
];

function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function getRandomWord() {
    const word = words[randomNumber(0, words.length - 1)];
    return word;
}

function generate(name, total_size) {
    contents_size = total_size - name.length;
    contents = "c".repeat(contents_size - 1) + "E";
    cookie = name + "=" + contents;
    javascript_set =  "document.cookie = \"" + cookie + "\";"
    javascript_expire = "document.cookie = \"" + name + "=;expires=\" + new Date(0).toUTCString()";
    document.getElementById("output_set").innerHTML = javascript_set;
    document.getElementById("output_expire").innerHTML = javascript_expire;
}

function generate_random(total_size) {
    name = "test_cookie_" + getRandomWord();
    return generate(name, total_size);
}

function generate_custom() {
    name = document.getElementById("name").value
    total_size = document.getElementById("size").value
    return generate(name, total_size);
}
