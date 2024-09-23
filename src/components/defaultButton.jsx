export default function DefaultButton({children, disabled, onClick, classes}) {
  return (
    <div className="rounded-md bg-primary-light">
      <button
        onClick={onClick}
        disabled={disabled}
        className={`bg-gradient-to-br relative group/btn from-inverted-background to-inverted-medium disabled:contrast-75 block w-full transition-all duration:300 ease-in-out text-white rounded-md font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:[&:not(:disabled)]:-translate-y-1 hover:[&:not(:disabled)]:translate-x-1 hover:[&:not(:disabled)]:shadow-xl hover:[&:not(:disabled)]:contrast-125 ${classes}`}
        type="submit"
      >
        {children}
        <BottomGradient />
      </button>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-secondary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
