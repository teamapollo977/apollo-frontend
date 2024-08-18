export default function DefaultButton({children}) {
  return (
    <div className="rounded-md bg-primary-light">
      <button
        className="bg-gradient-to-br hover:bg-right relative group/btn from-inverted-background to-inverted-medium block w-full transition-all duration:1000 ease-in-out text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] hover:-translate-y-1 hover:translate-x-1 hover:shadow-xl"
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
