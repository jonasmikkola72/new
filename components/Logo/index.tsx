import Link from "next/link";
import Image from "../Image";
import cn from "classnames";
import styles from "./Logo.module.sass";

type LogoProps = {
    className?: string;
};

const Logo = ({ className }: LogoProps) => (
    <Link href="/">
        <a className={cn(styles.logo, className)}>
            <Image
                src="/images/astroclash.png"
                width="160"
                height="37"
                alt="AstroClash"
            />
        </a>
    </Link>
);

export default Logo;
