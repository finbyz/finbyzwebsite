import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

interface WorkingHourExceptionFormProps {
  onSuccess: () => void;
}

interface ExceptionData {
  employee_name: string;
  starting_date: string;
  total_hours: string | number;
  productivity_score: string | number;
}

const fetchExceptionDetails = async (docId: string): Promise<ExceptionData | null> => {
  try {
    const response = await fetch(`/api/method/productivity_next.api.working_hour_exception_details?doc_id=${docId}`);
    const result = await response.json();
    if (result.message) {
      return {
        employee_name: result.message.employee_name || "",
        starting_date: result.message.starting_date || "",
        total_hours: String(result.message.total_hours ?? ""),
        productivity_score: String(result.message.productivity_score ?? "")
      };
    }
    return null;
  } catch (error) {
    return null;
  }
};

const submitExceptionReason = async (doc_id: string, reason: string): Promise<"success" | "error"> => {
  try {
    const response = await fetch("/api/method/productivity_next.api.submit_working_hour_exception_reason", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ doc_id, reason })
    });
    const result = await response.json();
    if (result.message === "success") {
      return "success";
    }
    return "error";
  } catch (error) {
    return "error";
  }
};

const getDocIdFromUrl = (): string | null => {
  if (typeof window === "undefined") return null;
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("doc_id");
};

const WorkingHourExceptionForm: React.FC<WorkingHourExceptionFormProps> = ({ onSuccess }) => {
  const [docId, setDocId] = useState<string | null>(null);
  const [data, setData] = useState<ExceptionData | null>(null);
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const id = getDocIdFromUrl();
    setDocId(id);
    if (!id) {
      setError("Missing Document ID in URL");
      setLoading(false);
      return;
    }
    fetchExceptionDetails(id).then((res) => {
      if (res) {
        setData(res);
      } else {
        setError("No data found for this Document ID.");
      }
      setLoading(false);
    });
  }, []);

  const handleReset = () => {
    setReason("");
    setSubmitError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError(null);
    if (!docId) {
      setSubmitError("Missing Document ID.");
      setSubmitting(false);
      return;
    }
    const result = await submitExceptionReason(docId, reason);
    setSubmitting(false);
    if (result === "success") {
      setSuccess(true);
      onSuccess();
    } else {
      setSubmitError("Submission failed. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-12 animate-pulse">
        <Loader2 className="w-8 h-8 text-primary animate-spin mb-2" />
        <span className="text-muted-foreground">Loading form...</span>
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-none shadow-lg">
        <CardHeader className="flex flex-row items-center gap-2">
          <XCircle className="text-destructive w-6 h-6" />
          <CardTitle>Error</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-destructive text-sm">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border-none shadow-lg transition-all duration-300 hover:shadow-xl">
      <CardHeader>
        <CardTitle className="text-center text-lg md:text-xl font-semibold">Please Fill a Reason For Incomplete Working Hours</CardTitle>
        <CardDescription className="text-center text-muted-foreground">This information helps us understand and address your working hour exception.</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div>
            <label htmlFor="employee_name" className="block text-sm font-medium mb-1">Employee Name</label>
            <Input id="employee_name" name="employee_name" value={data?.employee_name || ""} readOnly className="bg-muted/50" />
          </div>
          <div>
            <label htmlFor="starting_date" className="block text-sm font-medium mb-1">Date</label>
            <Input id="starting_date" name="starting_date" value={data?.starting_date || ""} readOnly className="bg-muted/50" />
          </div>
          <div>
            <label htmlFor="total_hours" className="block text-sm font-medium mb-1">Total Working Hours</label>
            <Input id="total_hours" name="total_hours" value={data?.total_hours || ""} readOnly className="bg-muted/50" />
          </div>
          <div>
            <label htmlFor="productivity_score" className="block text-sm font-medium mb-1">Productivity Score</label>
            <Input id="productivity_score" name="productivity_score" value={data?.productivity_score || ""} readOnly className="bg-muted/50" />
          </div>
          <div>
            <label htmlFor="reason" className="block text-sm font-medium mb-1">Reason for Low Productivity / Hours <span className="text-destructive">*</span></label>
            <Textarea id="reason" name="reason" required value={reason} onChange={e => setReason(e.target.value)} placeholder="Describe the reason..." className="resize-none min-h-[80px]" />
          </div>
          {submitError && (
            <div className="text-destructive text-sm flex items-center gap-2">
              <XCircle className="w-4 h-4" /> {submitError}
            </div>
          )}
          {success && (
            <div className="text-success text-sm flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Submitted successfully!
            </div>
          )}
        </CardContent>
        <CardFooter className="flex flex-row justify-between gap-2 pt-4">
          <Button type="reset" variant="outline" onClick={handleReset} className="rounded-md">Discard</Button>
          <Button type="submit" disabled={submitting || !reason.trim()} className="rounded-md">
            {submitting ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : null}
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default WorkingHourExceptionForm;
