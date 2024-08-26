interface LinkTextProps {
  titleText: string;
  linkContent: string;
}

function HoverLink({ titleText, linkContent }: LinkTextProps) {
  return (
    <>
      <a
        href={linkContent}
        target="_blank"
        className="border-dashed border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black hover:underline transition ease-in-out"
      >
        {titleText}
      </a>
    </>
  );
}

export default HoverLink;
