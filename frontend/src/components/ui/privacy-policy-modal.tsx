"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export function PrivacyPolicyModal() {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = (e: React.MouseEvent) => {
		e.preventDefault();
		setIsOpen(true);
	};

	const closeModal = () => setIsOpen(false);

	return (
		<>
			<a href="#" onClick={openModal} className="hover:text-brand-yellow transition-colors">
				Privacy
			</a>

			<AnimatePresence>
				{isOpen && (
					<div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							onClick={closeModal}
							className="fixed inset-0 bg-black/60 backdrop-blur-sm"
						/>
						<motion.div
							initial={{ opacity: 0, scale: 0.95, y: 20 }}
							animate={{ opacity: 1, scale: 1, y: 0 }}
							exit={{ opacity: 0, scale: 0.95, y: 20 }}
							className="relative w-full max-w-3xl max-h-[80vh] overflow-y-auto bg-background border border-foreground/10 rounded-2xl shadow-2xl p-6 md:p-10"
						>
							<button
								onClick={closeModal}
								className="absolute top-4 right-4 p-2 text-foreground/60 hover:text-foreground transition-colors rounded-full hover:bg-foreground/5"
							>
								<X className="w-6 h-6" />
							</button>

							<div className="prose prose-invert max-w-none">
								<h2 className="text-3xl font-bold mb-6 text-foreground">Privacy Policy</h2>

								<div className="space-y-6 text-foreground/80">
									<p>
										<strong>General</strong><br />
										Webbeezwork (“we” or “us”) provides this Privacy Policy to inform you about how we collect, use or disclose personal data from users of www.webbeezwork.com (“Site”).
									</p>
									<p>
										This Privacy Policy applies only to information that you provide to us through the Site. This Privacy Policy may be updated from time to time. We may update this Privacy Policy to reflect changes to our information practices. If we make any material changes, we will notify you by means of a notice on the Site prior to the change becoming effective. We encourage you to periodically review this page for the latest information on our privacy practices.
									</p>
									<p>
										This Privacy Policy does not apply to the practices of third parties that we do not own or control, including social media websites such as Instagram, Facebook and Twitter.
									</p>
									<p>
										We encourage you to carefully review the privacy policies and terms and conditions of other sites that you use.
									</p>

									<p>
										<strong>Collection and use of data</strong><br />
										Our primary purposes for collecting data are to offer you, our digital marketing services, to improve our Site, services, features and content, to administer your use of the Site and to enable users to enjoy and easily navigate the Site.
									</p>

									<p>
										<strong>International Transfer</strong><br />
										Your data may be transferred to computers located outside of your country, state or province, foreign or domestic. Further please note that we use third party vendors and hosting partners to provide the necessary hardware, software and related technology required to run our Site.
									</p>

									<p>
										<strong>Sharing data</strong><br />
										We do not sell, trade, or rent your personal data to others. We may use third party service providers to help us operate our business and our Site and services or administer activities on our behalf.
									</p>

									<p>
										<strong>Third Party WebSite</strong><br />
										You may find advertising or other content on our Site that link to sites and services of third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linking to or linked from our Site. Please check the privacy policy and other documentation on the respective website(s).
									</p>

									<p>
										<strong>Log Data</strong><br />
										When you visit the Site, our servers automatically record information that your browser sends whenever you visit a website (“Log Data”). This Log Data may include information such as your computer’s internet protocol address, browser type or the webpage you were visiting before you came to our Site, pages of our Site and Application that you visit, the time spent on those pages, information you search for on our Site and Application, access times and dates, and other statistics. We use this information to monitor and analyze use of the Site and for the Site’ technical administration, to increase our Site functionality and user-friendliness, and to better tailor our Site to our visitors’ needs. We may aggregate, analyze and evaluate such information.
									</p>

									<p>
										<strong>Cookies</strong><br />
										Like many websites, we use “cookies” to collect information. A cookie is a small data file that we transfer to your computer’s hard disk for record-keeping purposes.
									</p>

									<p>
										<strong>Compliance with Laws and Law Enforcement</strong><br />
										Webbeezwork cooperates with government and law enforcement officials to enforce and comply with the law. We will disclose any information about you to government or law enforcement officials as we, in our sole discretion, believe necessary or appropriate to respond to claims and legal process (including but not limited to subpoenas), to protect the property and rights of Webbeezwork or a third party, to protect the safety of the public or any person, or to prevent or stop activity we may consider to be, or to pose a risk of being, any illegal, unethical or legally actionable activity.
									</p>

									<p>
										<strong>Contacting us</strong><br />
										If you have any questions regarding this Privacy Policy, please contact us at:<br />
										Webbeezwork (part of To Be Worldwide Takoradi)<br />
										47 Mrs Cudjoe Cres<br />
										Takoradi, Ghana<br />
										<a href="https://www.webbeezwork.com" className="text-brand-yellow hover:underline">www.webbeezwork.com</a>
									</p>

									<p className="text-sm text-foreground/40 pt-4 border-t border-foreground/10">
										This document was last updated on November 29th, 2025.
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</>
	);
}
