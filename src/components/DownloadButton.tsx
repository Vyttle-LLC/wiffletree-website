import ButtonLink from "@/components/ButtonLink";
import { DownloadIcon } from "@/components/icons";
import { links } from "@/lib/content";

export default function DownloadButton() {
  return (
    <ButtonLink href={links.download} variant="primary" size="lg">
      <DownloadIcon />
      Download for macOS
    </ButtonLink>
  );
}
