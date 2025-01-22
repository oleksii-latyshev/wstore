export class ModalState {
	public isOpen = $state<boolean>();

	constructor(modalState: boolean) {
		this.isOpen = modalState;
	}

	public open() {
		this.isOpen = true;
	}

	public close() {
		this.isOpen = false;
	}

	public toggle() {
		this.isOpen = !this.isOpen;
	}
}
