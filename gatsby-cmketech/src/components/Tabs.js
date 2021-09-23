import React from "react"

const Tabs = (tabs) => {
  const [active, setActive] = useState(tabs[0])
  return (
    <>
      <div className="tabs">
        {tabs.map((tab) => (
          <div key={tab} active={active === tab} onClick={() => setActive(tab)}>
            {tab}
          </div>
        ))}
      </div>
      <div className="tab-content">{active}</div>
    </>
  )
}

export default Tabs
