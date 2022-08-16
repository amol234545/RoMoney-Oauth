var sele = document.currentScript
var message = [
"RoMoney auth"
].join(null)
if (sele != null) {
var btn = document.createElement('button')
btn.className = 'romoney-auth-btn'

} else {
var text = document.createTextNode(message)
var div = document.createElement("div")

}
