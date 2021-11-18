using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Result
{

    /*
     * Complete the 'timeInWords' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     *  1. INTEGER h
     *  2. INTEGER m
     */
     enum Numbers
     {
        one = 1,
        two = 2,
        three = 3,
        four = 4,
        five = 5,
        six = 6,
        seven = 7,
        eight = 8,
        nine = 9,
        ten = 10,
        eleven = 11,
        twelve = 0,
        thirteen = 13,
        fourteen = 14,
        fifteen = 15,
        sixteen = 16,
        seventeen = 17,
        eighteen = 18,
        nineteen = 19,
        twenty = 20,
        thirty = 30,
        fourty = 40,
        fifty = 50
     }

    public static string timeInWords(int h, int m)
    {
        string timeInWords = "";
        
        if(h <12 && m < 60)
        {
        //segment in hours, quaerter, half, quarter to
        if(m==00)
            return ((Numbers)h).ToString() + " o' clock";
        else if(m==15)
            return "quarter past " + ((Numbers)h).ToString();
        else if(m==30)
            return "half past " + ((Numbers)h).ToString();
        else if(m==45)
            return "quarter to " + ((Numbers)h +1).ToString();
        else 
        {
            int hundreds = 0;
            int tens = 0;
                if(m < 30)
                {
                    hundreds = (m%100) - (m%10);
                    tens = m%10;
                    if(m<=20)
                    {
                        if(m==1)
                        return ((Numbers)m).ToString() + " minute past " + ((Numbers)h).ToString();
                        else 
                        return ((Numbers)m).ToString() + " minutes past " + ((Numbers)h).ToString();
                    }
                    else 
                    {
                        return ((Numbers)hundreds).ToString() + " " + ((Numbers)tens).ToString() + " minutes past " + ((Numbers)h).ToString();
                    }
                }
                else 
                {
                    m = 60 - m;
                    hundreds = (m%100) - (m%10);
                    tens = m%10;
                    
                     if(m<=20)
                    {
                        if(m==1)
                        return ((Numbers)m).ToString() + " minute to " + ((Numbers)h +1).ToString();
                        else 
                        return ((Numbers)m).ToString() + " minutes to " + ((Numbers)h +1).ToString();
                    }
                    
                    return ((Numbers)hundreds).ToString() + " " + ((Numbers)tens).ToString() + " minutes to " + ((Numbers)h +1).ToString();
                }
        }
        }
        return timeInWords;
    }

}

class Solution
{
    public static void Main(string[] args)
    {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int h = Convert.ToInt32(Console.ReadLine().Trim());

        int m = Convert.ToInt32(Console.ReadLine().Trim());

        string result = Result.timeInWords(h, m);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
