const KeyTakeaways = () => {
    const keyTakeaways = [
        {
          id: 1,
          content:
            "A different look at IT as a 'business enabler', and how to converge it with business goals and objectives.",
        },
        {
          id: 2,
          content:
            "Trainees will become aware of a set of topics and knowledge areas in IT governance and its operational management.",
        },
        {
          id: 3,
          content:
            "Realise the key roles and responsibilities in managing IT in the organization, and become able to design the needed structures for successful and secured IT.",
        },
        {
          id: 4,
          content:
            "Integrate contemporary managerial concepts and theories to the continuous improvement in IT function at organization level.",
        },
        {
          id: 5,
          content:
            "Learn how to prioritise and launch IT projects, and integrate it to the business strategy successfully.",
        },
      ];
    return ( <div className="">
        <h1 className="text-[38px] font-semibold sm:p-5 p-3 font-montserrat">
          Key Takeaways
        </h1>
        <div className="flex flex-col gap-2 justify-evenly items-center sm:p-2">
          {keyTakeaways.map((point) => (
            <div className="flex items-center gap-5 border-b border-gray-300 ">
              <div className="p-5">
                <span className="text-3x font-montserratl">{point.id}</span>
              </div>
              <div className="flex-1">
                <span className="text-lg leading-tight font-montserrat">{point.content}</span>
              </div>
            </div>
          ))}
        </div>
      </div> );
}
 
export default KeyTakeaways;