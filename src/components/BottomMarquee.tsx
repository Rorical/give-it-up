function BottomMarquee() {
  const text = 'GIVE IT UP '.repeat(50);

  return (
    <div className="fixed bottom-0 left-0 right-0 h-[32px] bg-white overflow-hidden z-50 flex items-center">
      <div className="flex animate-marquee">
        <span className="text-black text-lg font-bold whitespace-nowrap tracking-wider">
          {text}
        </span>
        <span className="text-black text-lg font-bold whitespace-nowrap tracking-wider">
          {text}
        </span>
      </div>
    </div>
  );
}

export default BottomMarquee;
