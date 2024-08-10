"use client";
import React from "react";
import Image from "next/image";
import logo from "../../public/logo-name-hosting.png";
import mockChart from "../../public/mock-chart.png";
import "../css/style.css";
import useStore from "../hooks/use-store";

const LandingPage = () => {
  const chainStats = useStore((state) => state.chainStats);

  return (
    <div className="dashboard">
      <div className="eclipse">
        <div className="chart-container">
          <div className="neoxa-chart">
            <Image
              src={mockChart}
              width={650}
              height={320}
              alt="NODEXA Hosting"
            />
          </div>
        </div>

        <div className="stats-section">
          <div className="neoxa-stats">
            <div className="title">
              <h2 className="section-title font-bold">NEOXA</h2>
            </div>
            <div className="stats">
              <div className="stat-box">
                Marketcap
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.marketcap}</div>
                </div>
                
              </div>
              <div className="stat-box">
                Price
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.price}</div>
                </div>
                
              </div>
              <div className="stat-box">
                Circulation Supply
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.circulationSupply}</div>
                    <Image
                      width={10}
                      height={10}
                      src="/assets/rewards.png"
                      alt="rewards"
                      className="h-4 w-4 translate-y-1"
                    />
                </div>
                
              </div>
              <div className="stat-box">
                Total Supply
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.totalSupply}</div>
                    <Image
                      width={10}
                      height={10}
                      src="/assets/rewards.png"
                      alt="rewards"
                      className="h-4 w-4 translate-y-1"
                    />
                </div>
              </div>
            </div>
          </div>

          <div className="smartnodes-stats">
            <div className="title">
              <h2 className="section-title font-bold">SMARTNODE STATS</h2>
            </div>
            <div className="stats">
              <div className="stat-box">
                Daily Smartnode Rewards
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.dailyRewards}</div>
                    <Image
                      width={10}
                      height={10}
                      src="/assets/rewards.png"
                      alt="rewards"
                      className="h-4 w-4 translate-y-1"
                    />
                </div>
              
              </div>
              <div className="stat-box">
                Monthly Smartnode Rewards
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.monthlyRewards}</div>
                    <Image
                      width={10}
                      height={10}
                      src="/assets/rewards.png"
                      alt="rewards"
                      className="h-4 w-4 translate-y-1"
                    />
                </div>
              
              </div>
              <div className="stat-box">
                Annual ROI
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.annualRoi}</div>
                    
                </div>
              
              </div>
              <div className="stat-box">
                Smartnode Value
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.smartnodeValue}</div>
                    
                </div>
              </div>
              <div className="stat-box">
                Active Smartnodes
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.activeSmartnodes}</div>
                    
                </div>
              </div>
              <div className="stat-box">
                Total Smartnodes
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.totalSmartnodes}</div>
                    
                </div>
              </div>
              <div className="stat-box">
                Circulating Supply In Smartnodes
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.lockedSupply}</div>
                    
                </div>
              </div>
              <div className="stat-box">
                Smartnode Collateral
                <br />
                <div className="text-[#afafaf] flex gap-2">
                  <div>{chainStats.collateral}</div>
                    
                </div>
              </div>
              

              
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
