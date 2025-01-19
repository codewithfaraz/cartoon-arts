import React from "react";
import { useTranslation } from "react-i18next";
import { FaTwitter, FaTelegram, FaDiscord } from "react-icons/fa";
import { SiRaydium, SiJupyter } from "react-icons/si";

export const Footer: React.FC = () => {
  const { t } = useTranslation();

  const socialLinks = [
    { icon: <FaTwitter />, href: "#", label: t("footer.twitter") },
    { icon: <FaTelegram />, href: "#", label: t("footer.telegram") },
    { icon: <FaDiscord />, href: "#", label: t("footer.discord") },
  ];

  const exchangeLinks = [
    { icon: <SiRaydium />, href: "#", label: t("footer.raydium") },
    { icon: <SiJupyter />, href: "#", label: t("footer.jupiter") },
  ];

  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <img
              src="/logo.png"
              alt="Weidel Coin"
              className="h-12 mx-auto md:mx-0 mb-4"
            />
            <p className="text-blue-200">{t("footer.description")}</p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">{t("footer.quickLinks")}</h3>
            <div className="flex justify-center gap-6">
              {exchangeLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-gold transition-colors"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold mb-4">{t("footer.community")}</h3>
            <div className="flex justify-center md:justify-end gap-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="hover:text-gold transition-colors"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800 text-center text-blue-200">
          <p>
            &copy; {new Date().getFullYear()} Weidel Coin. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};
