// 1. Define TypeScript Blueprints for Codeforces API shapes
interface CodeforcesUser {
  handle: string;
  rating?: number;
  maxRating?: number;
  rank?: string;
  maxRank?: string;
  titlePhoto: string;
}

interface CodeforcesApiResponse {
  status: string;
  comment?: string;
  result: CodeforcesUser[];
}

// Helper function to capitalize rank strings (e.g., "candidate master" -> "Candidate Master")
const formatRank = (rank?: string) => {
  if (!rank) return "Unrated";
  return rank.replace(/\b\w/g, (char) => char.toUpperCase());
};

interface CodeforcesStatsProps {
  handle: string;
}

export default async function CodeforcesStats({ handle }: CodeforcesStatsProps) {
  let userData: CodeforcesUser | null = null;
  let error = false;

  try {
    // Fetch data directly on the server. 
    // next: { revalidate: 3600 } caches the stats for 1 hour (3600 seconds)
    const response = await fetch(
      `https://codeforces.com/api/user.info?handles=${handle}`,
      { next: { revalidate: 3600 } }
    );

    const data: CodeforcesApiResponse = await response.json();

    if (data.status === "OK" && data.result.length > 0) {
      userData = data.result[0];
    } else {
      error = true;
    }
  } catch (e) {
    error = true;
  }

  // Graceful Fallback UI if the API is down or handle is mistyped
  if (error || !userData) {
    return (
      <div className="p-6 bg-card border border-destructive/50 rounded-xl text-center text-sm text-muted-foreground">
        Failed to load Codeforces statistics for "{handle}".
      </div>
    );
  }

  return (
    <div className="w-full max-w-md bg-card border border-border rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-4">
        {/* Profile Avatar fetched dynamically */}
        <img 
          src={userData.titlePhoto} 
          alt={`${handle}'s Codeforces Avatar`} 
          className="w-16 h-16 rounded-lg object-cover bg-muted border border-border"
        />
        
        {/* Handle and Current Tier */}
        <div className="grow">
          <h3 className="font-bold text-lg leading-none mb-1">
            <a 
              href={`https://codeforces.com/profile/${handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors hover:underline"
            >
              {userData.handle}
            </a>
          </h3>
          <p className="text-sm font-medium text-primary">
            {formatRank(userData.rank)}
          </p>
        </div>
      </div>

      {/* Grid Displaying Metric Blocks */}
      <div className="grid grid-cols-2 gap-4 mt-6 pt-4 border-t border-border">
        <div>
          <span className="text-xs font-medium text-muted-foreground block mb-0.5">Current Rating</span>
          <span className="text-xl font-bold tracking-tight">
            {userData.rating ?? "—"}
          </span>
        </div>
        <div>
          <span className="text-xs font-medium text-muted-foreground block mb-0.5">Max Rating</span>
          <span className="text-xl font-bold tracking-tight text-muted-foreground">
            {userData.maxRating ?? "—"}
          </span>
        </div>
        <div>
          <span className="text-xs font-medium text-muted-foreground block mb-0.5">Max Rank</span>
          <span className="text-sm font-semibold truncate block mt-1">
            {formatRank(userData.maxRank)}
          </span>
        </div>
        <div className="flex items-end justify-end">
          <a 
            href={`https://codeforces.com/profile/${handle}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs bg-secondary text-secondary-foreground font-medium px-3 py-1.5 rounded-md hover:bg-secondary/80 transition-colors"
          >
            View Profile →
          </a>
        </div>
      </div>
    </div>
  );
}