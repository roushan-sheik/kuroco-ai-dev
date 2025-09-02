import { Folder } from "lucide-react";
import React from "react";

type Project = {
  title: string;
  role: string;
  progress: number;
  lastUpdated: string;
  status: "in-progress" | "completed";
};

const projects: Project[] = [
  {
    title: "E-commerce Renewal",
    role: "Project Manager",
    progress: 75,
    lastUpdated: "2024/01/15",
    status: "in-progress",
  },
  {
    title: "New App Development",
    role: "Developer",
    progress: 30,
    lastUpdated: "2024/01/12",
    status: "in-progress",
  },
  {
    title: "Marketing System",
    role: "Consultant",
    progress: 100,
    lastUpdated: "2024/01/08",
    status: "completed",
  },
];

const getProgressColor = (progress: number): string => {
  if (progress === 100) return "bg-green-500";
  if (progress < 50) return "bg-red-500";
  return "bg-gray-400";
};

const JoinedProjects: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Joined Projects</h2>
      <div className="space-y-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border rounded-md flex justify-between gap-2 hover:bg-gray-50 transition"
          >
            <div className="flex items-center gap-4">
              <div>
                <img src="/Symbol.png" alt="" className="w-5 h-4 " />
              </div>
              {/* <Folder className="w-5 h-5 text-blue-600" /> */}

              <div>
                <div className="font-medium text-gray-800">{project.title}</div>
                <div className="text-sm text-gray-500">{project.role}</div>
              </div>
            </div>

            {/* Progress Bar */}
            <div>
              <div className="flex items-center gap-2">
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`${getProgressColor(
                      project.progress
                    )} h-full rounded-full transition-all`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
                <span>{project.progress}%</span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                {project.status === "completed" ? (
                  <span>Completed: {project.lastUpdated}</span>
                ) : (
                  <span>Last updated: {project.lastUpdated}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JoinedProjects;
