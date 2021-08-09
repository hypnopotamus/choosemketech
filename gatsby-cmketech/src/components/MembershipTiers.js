import React from "react"
import { Link } from "gatsby"

const MembershipTiers = ({}) => {
    return (
        <section className="memberships--tier container">
            <div className="memberships--perks">
                <div>INCLUDES</div>
                <p>Member Benefits</p>
            </div>
            <div className="memberships--feature">
                <section className="memberships--feature__grid">
                    <div>
                        <h4>Premium</h4>
                        <span>For enterprises tech companies</span>
                    </div>
                    <div>
                        <h4>Enhanced</h4>
                        <span>For mid to large tech employers</span>
                    </div>
                    <div>
                        <h4>Base</h4>
                        <span>For small tech employers</span>
                    </div>
                    <div>
                        <h4>Premium</h4>
                        <span>For startups + engaged community members</span>
                    </div>
                </section>
            </div>
            <div class="membership--perks">NEWWWW</div>
            <div class="membership--perks">NEWWWW</div>
            <div class="membership--perks">NEWWWW</div>
            <div class="membership--perks">NEWWWW</div>


        </section>
    )
}

export default MembershipTiers
