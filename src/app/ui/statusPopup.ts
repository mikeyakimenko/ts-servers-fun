export class StatusPopup {
    private container: HTMLHtmlElement

    constructor() {
        this.container = document.querySelector('[front-role="app-body"]')
    }

    static create() {
        return new StatusPopup()
    }

    private render () {
        return `
            <style>
                .statusPopup {
                    width: 220px;
                    position: absolute;
                    box-sizing: border-box;
                    padding: 20px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    overflow-y: scroll;
                    box-shadow: 0px 0px 10px 0px rgba(210, 210, 210, 0.75);
                    background-color: white;
                    z-index: 2;
                    display: none;
                    align-items: center;
                }
                .statusPopup.active {
                    display: flex;
                }
                .statusPopup > .status {
                    flex: calc(100% - 24px);
                }
                .statusPopup > .close {
                    width: 24px;
                    height: 24px;
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #ec8888;
                    color: white;
                }
            </style>
            <div id="ui-statuspopup" class="statusPopup">
                <span class="status">Status online</span>
                <span class="close">&#10005;</span>
            </div>
        `
    }

    private addListeners() {
        let element = document.querySelector('#ui-statuspopup')
        let close = element.querySelector('.close')
        close.addEventListener('click', e => {
            this.closePopup()
        }, false)
    }

    private closePopup() {
        let element = document.querySelector('#ui-statuspopup')
        let statusSpan = element.querySelector('.status')
        statusSpan.textContent = ''
        element.classList.remove('active')
    }

    public showStatus(id) {
        let element = document.querySelector('#ui-statuspopup')
        let statusSpan = element.querySelector('.status')
        statusSpan.textContent = `this server: ${id} is currently online`
        element.classList.add('active')
    }

    public createElement() {
        let element = document.createRange().createContextualFragment(this.render())
        this.container.appendChild(element)
        this.addListeners()
    }
}
