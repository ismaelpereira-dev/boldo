"use client"
import styles from "./Modal.module.css"

type ModalProps = {
	isOpen: boolean
	onClose: () => void
}

export default function ModalRegistro({ isOpen, onClose }: ModalProps) {
	return (
		<div
			className={`${styles["modal-overlay"]} ${
				isOpen ? styles["active"] : ""
			}`}
			onClick={(e) => {
				if (e.target === e.currentTarget) {
					onClose()
				}
			}}
		>
			<div className={styles["modal-card"]}>
				<button
					className={styles["modal-close"]}
					onClick={onClose}
				>
					&times;
				</button>

				<h2>Solicite uma demonstração gratuita</h2>

				<form className={styles["modal-form"]}>
					<input type="text" placeholder="Nome da empresa*" required />
					<input type="email" placeholder="E-mail*" required />
					<input type="tel" placeholder="Celular*" required />
					<textarea placeholder="Mensagem"></textarea>

					<label className={styles["checkbox"]}>
						<input type="checkbox" required />
						<span>
							Sim, eu autorizo recebimento de atualização.
						</span>
					</label>

					<button type="submit" className={styles["modal-submit"]}>
						Enviar formulário
					</button>
				</form>
			</div>
		</div>
	)
}