import { company } from "@/lib/company";
import styles from "@/styles/CompanyDetails.module.css";

export default function CompanyDetails() {
  return (
    <address className={styles.details} dir="ltr" lang="en">
      <strong>{company.name}</strong>
      <p>Company Registration No. {company.registration}</p>
      <p>{company.address}</p>
      <p>Tel: <a href="tel:+66658878829">{company.phone}</a></p>
      <p>Email: <a href={`mailto:${company.email}`}>{company.email}</a></p>
    </address>
  );
}
