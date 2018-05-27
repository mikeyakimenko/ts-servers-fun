export class ServersListPopup {
    private id: string
    private data: {
        serversList: any[],
        callbacks: any
    }
    private container: HTMLHtmlElement

    constructor(id, data) {
        this.id = id
        this.data = data
        this.container = document.querySelector('[front-role="app-body"]')
    }

    static create(id, data) {
        return new ServersListPopup(id, data)
    }

    private addListeners() {
        let element = document.querySelector(`#ui-${this.id}`)
        let elementItems = Array.from(element.querySelectorAll('#ui-server'))
        elementItems.forEach(item => {
            let trigger = item.querySelector('.link')
            let serverId = trigger.getAttribute('data-id')
            trigger.addEventListener('click', e => {
                this.data.callbacks.serverNameClick(serverId)
            }, false)
        })
    }

    private render(data): string {
        return `
            <style>
                .popup {
                    width: 60%;
                    height: 60%;
                    position: absolute;
                    box-sizing: border-box;
                    padding: 20px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%, -50%);
                    overflow-y: scroll;
                    box-shadow: 0px 0px 10px 0px rgba(210, 210, 210, 0.75);
                    z-index: 1;
                }
                .items {
                    margin: auto;
                    padding: 0;
                }
                .item + .item {
                    margin-top: 20px;
                }
                .item {
                    list-style: none;
                    display: flex;
                    flex-wrap: wrap;
                    padding: 10px;
                    border: 1px solid silver;
                    box-sizing: border-box;
                }
                .item > .link {
                    text-align: center;
                    font-weight: bold;
                    display: block;
                    cursor: pointer;
                }
                .item > * {
                    width: 100%;
                    box-sizing: border-box;
                    padding: 10px;
                }
                .item > * + * {
                    width: 100%;
                    margin-top: 5px;
                }
                .item > *:nth-child(odd) {
                    background: #f1f1f1;
                }
            </style>
            <div id="ui-${this.id}" class="popup">
                <ul class="items">
                ${data.serversList.map((item, index) => {
                    return `<li id="ui-server" class="item">
                                <span class="link" data-id="${item.id}">${item.serverName}</span>
                                <div>server id: ${item.id}</div>
                                <div>server group: ${item.serverGroup}</div>
                                <div>server rate: ${item.rate}</div>
                                <div>server rate: ${item.uptime}</div>
                            </li>`
                }).join('')}
                </ul>
            </div>
        `
    }

    public createElement(): void {
        let element = document.createRange().createContextualFragment(this.render(this.data))
        this.container.appendChild(element)
        this.addListeners()
    }
}
